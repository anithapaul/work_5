const Express=require('express')
var app=new Express();
app.set('view engine','ejs');

app.use(Express.static(__dirname+"/public"));
books=[
    {
        
        'title':'Aatujeevitham',
        'author':'Benyamin',
        'publisher':'Green Books'
      

    },
    {
        title:" Khasakkinte Ithihasam ",
        author:"O.V. Vijayan",
        publisher:"Current Books"

    },
    {
        title:"Aalahayude Penmakal",
        author:"Sara Joseph",
        publisher:"Current Books"
    
    },
    {
        title:"Pathummayude Aadu",
        author:"Vaikom Muhammad Basheer",
        publisher:"DC Books"    

    },
    {
        title:"The Power of your Subconscious Mind",
        author:"Joseph Murphy",
        publisher:"Xpress"},
        
    {
        title:"The Alchemist",
        author:" Paulo Coelho",
        publisher:"DC Books"
        
    },
    
    {
        title:" Who Will Cry When You Die?",
        author:" Robin Sharma",
        publisher:"DC Books"
       

    },
    
    {
        title:"You are the Best Friend",
        author:"Ajay K. Pandey",
        publisher:"Nation publishers"

    }];
        a=[
            {
                AuthorName:'Benyamin',
                image: '/image/a.jpg',
                dob:'4-04-1988',
                place:'kerala'
            },
            {
                AuthorName:'O.V. Vijayan',
                image:"/image/b.jpg",
                dob:'7-08-1978',
                place:'kerala'
            },
            {
                AuthorName:'Sara Joseph',
                image:"/image/c.jpg",
                dob:'14-09-1965',
                place:'kerala'
            },{
                AuthorName:'Vaikom Muhammad Basheer',
                image:"/image/d.jpg",
                dob:'11-09-1890',
                place:'europe'
            },{
                AuthorName:'Joseph Murphy',
                image:"/image/e.jpg",
                dob:'8-05-1879',
                place:'america'
            },{
                AuthorName:'Paulo Coelho',
                image:"/image/f.jpg",
                dob:'15-03-1971',
                place:'england'
            },
            
            {
                AuthorName:'Robin Sharma',
                image:"/image/h.jpg",
                dob:'30-09-1870',
                place:'america'
            },
           
        ];


app.get('/readmore/:id',(req,res)=>{

    const x=req.params.id;
    res.render('single',{'books': books[x],

    navbarrr:[{link:'/books',title:'books'},{link:'/authors',title:'authors'}],

    title:'Library'}   )

})


app.get('/authors1/:id',(req,res)=>{

    const x=req.params.id;
    res.render('authors1',{'a': a[x],

    navbarrr:[{link:'/books',title:'books'},{link:'/authors',title:'authors'}],

    title:'Library'}   )

})




app.get('/',(req,res)=>{
    res.render(
        'index',
        {
            navbarrr:[{link:'/books',title:'books'},{link:'/authors',title:'authors'}],

            title:'Library'
        }
    )
})
app.get('/books',(req,res)=>{
    res.render('books',{ navbarrr:[{link:'/books',title:'books'},{link:'/authors',title:'authors'}],title:'books',books:books})
})
app.get('/authors',(req,res)=>{
    res.render('author',{ navbarrr:[{link:'/books',title:'books'},{link:'/authors',title:'authors'}],title:'authors',a:a})
})
app.listen(process.env.PORT || 3000,()=>{
    console.log("server is running on http://localhost:3000")
    });