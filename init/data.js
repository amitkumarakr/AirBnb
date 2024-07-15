const SampleData = [
    {
        title: "Cozy Cottage",
        description: "A charming and cozy cottage in the countryside.",
        image: "https://images.unsplash.com/photo-1468127225977-85bc4aa3fe0f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJ1aWxkaW5nfGVufDB8fDB8fHww",
        price: "120",
        location: "Nashville, TN",
        country: "USA"
    },
    {
        title: "Beachfront Bungalow",
        description: "A beautiful bungalow right on the beach.",
        image: "https://images.unsplash.com/photo-1514539079130-25950c84af65?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJ1aWxkaW5nfGVufDB8fDB8fHww",
        price: "200",
        location: "Malibu, CA",
        country: "USA"
    },
    {
        title: "Mountain Cabin",
        description: "A rustic cabin in the mountains with stunning views.",
        image: "https://plus.unsplash.com/premium_photo-1680553491336-644d5955ea50?dpr=2&w=306&auto=format&fit=crop&q=60&crop=entropy&cs=tinysrgb&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Nnx8YnVpbGRpbmd8ZW58MHwwfHx8MTcxOTg2MjYwMXwx&ixlib=rb-4.0.3",
        price: "150",
        location: "Aspen, CO",
        country: "USA"
    },
    {
        title: "City Apartment",
        description: "A modern apartment in the heart of the city.",
        image: "https://plus.unsplash.com/premium_photo-1661340695541-ee1ca7efedd0?dpr=2&w=306&auto=format&fit=crop&q=60&crop=entropy&cs=tinysrgb&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8YnVpbGRpbmd8ZW58MHwwfHx8MTcxOTg2MjYwMXwx&ixlib=rb-4.0.3",
        price: "180",
        location: "New York, NY",
        country: "USA"
    },
    {
        title: "Luxury Villa",
        description: "A luxurious villa with a private pool.",
        image: "https://plus.unsplash.com/premium_photo-1678379473620-db6bc7ff8a11?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVpbGRpbmd8ZW58MHx8MHx8fDE%3D",
        price: "500",
        location: "Los Angeles, CA",
        country: "USA"
    },
    {
        title: "Quaint Farmhouse",
        description: "A quaint farmhouse surrounded by farmland.",
        image: "https://plus.unsplash.com/premium_photo-1678888915452-8b2eb536ecb0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YnVpbGRpbmd8ZW58MHx8MHx8fDE%3D",
        price: "130",
        location: "Madison, WI",
        country: "USA"
    },
    {
        title: "Downtown Loft",
        description: "A spacious loft in the downtown area.",
        image: "https://plus.unsplash.com/premium_photo-1672423156600-7046441ff048?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YnVpbGRpbmd8ZW58MHx8MHx8fDE%3D",
        price: "160",
        location: "Chicago, IL",
        country: "USA"
    },
    {
        title: "Lake House",
        description: "A beautiful house with lake views.",
        image: "https://plus.unsplash.com/premium_photo-1672423154405-5fd922c11af2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YnVpbGRpbmd8ZW58MHx8MHx8fDE%3D",
        price: "220",
        location: "Lake Tahoe, NV",
        country: "USA"
    },
    {
        title: "Penthouse Suite",
        description: "A luxurious penthouse suite with city views.",
        image: "https://plus.unsplash.com/premium_photo-1661962911608-ea55ac7785da?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YnVpbGRpbmd8ZW58MHx8MHx8fDE%3D",
        price: "600",
        location: "Miami, FL",
        country: "USA"
    },
    {
        title: "Historic Home",
        description: "A historic home with antique furnishings.",
        image: "https://plus.unsplash.com/premium_photo-1680157072705-bb7f72ab1aa0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVpbGRpbmd8ZW58MHx8MHx8fDE%3D",
        price: "170",
        location: "Charleston, SC",
        country: "USA"
    },
    {
        title: "Tropical Paradise",
        description: "A tropical paradise with a private beach.",
        image: "https://plus.unsplash.com/premium_photo-1680553491336-644d5955ea50?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJ1aWxkaW5nfGVufDB8fDB8fHwx",
        price: "450",
        location: "Honolulu, HI",
        country: "USA"
    },
    {
        title: "Urban Condo",
        description: "A modern condo in the heart of the city.",
        image: "https://plus.unsplash.com/premium_photo-1680300273692-9fdbcc2ae1a5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1aWxkaW5nfGVufDB8fDB8fHwx",
        price: "140",
        location: "San Francisco, CA",
        country: "USA"
    },
    {
        title: "Desert Oasis",
        description: "A desert oasis with beautiful landscapes.",
        image: "https://plus.unsplash.com/premium_photo-1676625176020-3bbb1c0adea1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1aWxkaW5nfGVufDB8fDB8fHwx",
        price: "300",
        location: "Phoenix, AZ",
        country: "USA"
    },
    {
        title: "Ski Chalet",
        description: "A cozy chalet near the ski slopes.",
        image: "https://plus.unsplash.com/premium_photo-1661953958098-7988b76674c3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJ1aWxkaW5nfGVufDB8fDB8fHwx",
        price: "250",
        location: "Park City, UT",
        country: "USA"
    },
    {
        title: "Countryside Retreat",
        description: "A peaceful retreat in the countryside.",
        image: "https://plus.unsplash.com/premium_photo-1672356583459-446c3f5ff319?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJ1aWxkaW5nfGVufDB8fDB8fHwx",
        price: "110",
        location: "Lancaster, PA",
        country: "USA"
    },
    {
        title: "Modern Townhouse",
        description: "A stylish townhouse in a vibrant neighborhood.",
        image: "https://media.istockphoto.com/id/527909878/photo/tower-crane-at-construction-site-of-skyscraper-copy-space.webp?b=1&s=170667a&w=0&k=20&c=vErSrXf5HnYfgiOqIxeJ3G6pPHHNUrQqvN8tG0Wrv8I=",
        price: "180",
        location: "Austin, TX",
        country: "USA"
    },
    {
        title: "Seaside Cottage",
        description: "A cozy cottage by the sea.",
        image: "https://media.istockphoto.com/id/184619832/photo/business-district-at-dusk-london.webp?b=1&s=170667a&w=0&k=20&c=itRdlahx7G-gjBgCSRYO7DduJeMns9todE56Bom-zvA=",
        price: "190",
        location: "Cape Cod, MA",
        country: "USA"
    },
    {
        title: "Forest Cabin",
        description: "A secluded cabin in the forest.",
        image: "https://media.istockphoto.com/id/1351571961/photo/looking-directly-up-at-the-skyline-of-the-financial-district-in-central-london.webp?b=1&s=170667a&w=0&k=20&c=ScoPcmVztzvi771qPgGSvhA50WDt7gOM7361Ei0ODww=",
        price: "140",
        location: "Bend, OR",
        country: "USA"
    },
    {
        title: "Bohemian Apartment",
        description: "A colorful and artistic apartment.",
        image: "https://media.istockphoto.com/id/493107912/photo/dubai-construction.webp?b=1&s=170667a&w=0&k=20&c=jtY76FgGFN_56cp8VoWl9xZxomt44viszFV5u_IBFO4=",
        price: "160",
        location: "Portland, OR",
        country: "USA"
    },
    {
        title: "Riverside Bungalow",
        description: "A beautiful bungalow by the river.",
        image: "https://media.istockphoto.com/id/932755326/photo/modern-office-buildings-made-of-glass-and-concret.webp?b=1&s=170667a&w=0&k=20&c=dbqTL1HmlK_u5tD-p_AFBBsABiJV_eJEzT5fXZdFtP8=",
        price: "210",
        location: "Savannah, GA",
        country: "USA"
    },
    {
        title: "Chic Studio",
        description: "A chic studio in a trendy area.",
        image: "https://images.unsplash.com/photo-1710599971796-44dfd736d419?dpr=2&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MjgxNjY1fHxlbnwwfHx8fHw%3D",
        price: "130",
        location: "Seattle, WA",
        country: "USA"
    },
    {
        title: "Vintage House",
        description: "A vintage house with classic decor.",
        image: "https://images.unsplash.com/photo-1716744035238-3d64f0871cfe?dpr=2&h=147&w=126&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MjgxNjY1fHxlbnwwfHx8fHw%3D",
        price: "150",
        location: "New Orleans, LA",
        country: "USA"
    },
    {
        title: "Suburban Home",
        description: "A comfortable home in a quiet suburb.",
        image: "https://images.unsplash.com/photo-1542192143-a4a101f6615c?dpr=2&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MzYwOTc3OXx8ZW58MHx8fHx8",
        price: "120",
        location: "Plano, TX",
        country: "USA"
    },
    {
        title: "Beach House",
        description: "A spacious house right on the beach.",
        image: "https://images.unsplash.com/photo-1563313607-9a306a467223?dpr=2&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8Y2pwak5Mci14RXN8fGVufDB8fHx8fA%3D%3D",
        price: "300",
        location: "Myrtle Beach, SC",
        country: "USA"
    },
    {
        title: "Luxury Apartment",
        description: "A high-end apartment with modern amenities.",
        image: "https://images.unsplash.com/photo-1648737851351-b40fce70e77e?dpr=2&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTY1MDczOXx8ZW58MHx8fHx8",
        price: "250",
        location: "Boston, MA",
        country: "USA"
    },
    {
        title: "Country Manor",
        description: "A grand manor in the countryside.",
        image: "https://images.unsplash.com/photo-1539007230583-ca7850c509e1?dpr=2&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NzY0NDQ5fHxlbnwwfHx8fHw%3D",
        price: "400",
        location: "Charlottesville, VA",
        country: "USA"
    },
    {
        title: "Garden Cottage",
        description: "A lovely cottage surrounded by gardens.",
        image: "https://images.unsplash.com/photo-1597457742273-757383e427af?dpr=2&h=147&w=126&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MjIyOTAxNXx8ZW58MHx8fHx8",
        price: "140",
        location: "Portsmouth, NH",
        country: "USA"
    },
    {
        title: "Lakefront Cabin",
        description: "A cozy cabin right on the lake.",
        image: "https://images.unsplash.com/photo-1555047644-48d66122b751?dpr=2&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MjIyOTAxNXx8ZW58MHx8fHx8",
        price: "220",
        location: "Minneapolis, MN",
        country: "USA"
    },
    {
        title: "Urban Loft",
        description: "A trendy loft in an urban setting.",
        image: "https://images.unsplash.com/photo-1657583516495-30ca074f2201?dpr=2&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MTA5NTc0Mnx8ZW58MHx8fHx8",
        price: "170",
        location: "Brooklyn, NY",
        country: "USA"
    },
    {
        title: "Art Deco Apartment",
        description: "An apartment with stunning Art Deco decor.",
        image: "https://images.unsplash.com/photo-1565347878219-552c839f1447?dpr=2&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8YW5UaXdvSlB1TzB8fGVufDB8fHx8fA%3D%3D",
        price: "190",
        location: "Miami Beach, FL",
        country: "USA"
    }
]



module.exports = {data : SampleData};