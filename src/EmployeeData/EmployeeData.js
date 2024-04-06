
const employeeData  =  {
  id:"1",
  name: "Ashwin Yardi",
  department: "Executive",
  position: "CEO",
  phoneNumber: "2138495909",
  email: "aswhin@example.com",
  hasSubordinates: true,
  members: [
    {
        id:"2",
        name: "John Doe",
        department: "Human Resources",
        position: "Head of staff/HR",
        phoneNumber: "1234567890",
        email: "john@example.com",
        hasSubordinates: true,
        members: [
            {
                id:"3",
                name: "Bunny Shaw",
                department: "HR Team1",
                position: "Leader",
                phoneNumber: "3273993440",
                email: "bunny@example.com",
                hasSubordinates: true,
                members: [
                    {
                        id:"4",
                        name: "Sarah Wilson",
                        department: "HR Team1",
                        position: "Team member",
                        phoneNumber: "5486344099",
                        email: "michael@example.com",
                        hasSubordinates: false,
                        members: []
                    },
                    {
                        id:"5",
                        name: "Alex Rodriguez",
                        department: "HR Team1",
                        position: "Team member",
                        phoneNumber: "5486388049",
                        email: "alex@example.com",
                        hasSubordinates: false, 
                        members: []                           
                    },
                ]
            },
            {
                id:"6",
                name: "Jacob Martinez",
                department: "HR Team2",
                position: "Leader",
                phoneNumber: "7773993440",
                email: "jacob@example.com",
                hasSubordinates: true,
                members: [
                    {
                        id:"7",
                        name: "Emma Johnson",
                        department: "HR Team2",
                        position: "Team member",
                        phoneNumber: "5486344099",
                        email: "michael@example.com",
                        hasSubordinates: false,
                        members: []
                    },
                    {
                        id:"8",
                        name: "Alex Rodriguez",
                        department: "HR Team2",
                        position: "Team member",
                        phoneNumber: "5486388049",
                        email: "alex@example.com",
                        hasSubordinates: false,  
                        members: []                          
                    },
                ]                    
            }
        ]
    },
    {
        id:"9",
        name: "Karan Singh",
        department: "Engineering",
        position: "Head of engineering",
        phoneNumber: "1234567890",
        email: "karan@example.com",
        hasSubordinates: true,
        members: [
            {
                id:"10",
                name: "Rose Harley",
                department: "Eng Team1",
                position: "Leader",
                phoneNumber: "3273993440",
                email: "rose@example.com",
                hasSubordinates: true,
                members: [
                    {
                        id:"11",
                        name: "Lucas White",
                        department: "Eng Team1",
                        position: "Team member",
                        phoneNumber: "5486344099",
                        email: "lucas@example.com",
                        hasSubordinates: false,
                        members: []
                    },
                    {
                        id:"12",
                        name: "Emily Patel",
                        department: "Eng Team1",
                        position: "Team member",
                        phoneNumber: "5486388049",
                        email: "emily@example.com",
                        hasSubordinates: false, 
                        members: []                           
                    },
                ]
            },
            {
                id:"13",
                name: "Benjamin Hayes",
                department: "Eng Team2",
                position: "Leader",
                phoneNumber: "7773993440",
                email: "jacob@example.com",
                hasSubordinates: true,
                members: [
                    {
                        id:"14",
                        name: "Logan Cooper",
                        department: "Eng Team2",
                        position: "Team member",
                        phoneNumber: "5486344099",
                        email: "michael@example.com",
                        hasSubordinates: false,
                        members: []
                    },
                    {
                        id:"15",
                        name: "Matthew Russell",
                        department: "Eng Team2",
                        position: "Team member",
                        phoneNumber: "5486388049",
                        email: "alex@example.com",
                        hasSubordinates: false, 
                        members: []                           
                    },
                ]                    
            }
        ]
    },
    {
        id:"16",
        name: "David Baker",
        department: "Design",
        position: "Head of design",
        phoneNumber: "1234567890",
        email: "david@example.com",
        hasSubordinates: true,
        members: [
            {
                id:"17",
                name: "Emma Ward",
                department: "Design Team1",
                position: "Leader",
                phoneNumber: "3273993440",
                email: "emma@example.com",
                hasSubordinates: true,
                members: [
                    {
                        id:"18",
                        name: "Ava Coleman",
                        department: "Design Team1",
                        position: "Team member",
                        phoneNumber: "5486344099",
                        email: "ava@example.com",
                        hasSubordinates: false,
                        members: []
                    }
                ]
            }
        ]
    }
  ]
};

export default employeeData;