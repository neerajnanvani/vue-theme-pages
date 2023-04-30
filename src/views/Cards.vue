<template>
<div class="grid grid-cols-3 my-4 gap-x-6 gap-y-6">
    <div v-for="(data, index) in sampleData" :key="index" class="w-full h-44">
        <div class="flex flex-col w-full h-full border border-gray-400 shadow-xl p-2 rounded-md bg-white dark:bg-gray-800">
            <div class="flex w-full h-10 border-b-2 border-blue-500 p-1">
                 <div class="w-2/3 grow text-base font-medium dark:text-gray-100"> {{ data.job }}</div>
                <div class="flex text-xs justify-center items-center font-semibold p-1 border border-green-600 rounded-full bg-green-200"> {{ data.experience }} years</div>
            </div>
            <div class="h-24 flex flex-col text-sm py-3 space-y-3">
                <div class="flex justify-center items-center space-x-2">
                <span class="font-sm text-gray-500 dark:text-gray-300"> Education </span>
                <p class="text-base text-gray-600 dark:text-gray-200 truncate"> {{ data.education }}</p>
               </div> 
               <div class="flex justify-between">
                <div class="flex justify-center items-center space-x-2">
                    <span class="font-sm text-gray-500 inline-block align-baseline"> City </span> 
                <p class="text-base text-gray-600 align-baseline"> {{ data.city }}</p>
                </div>
                
                <div class="flex justify-center items-center space-x-2">
                    <span class="font-sm text-gray-500 inline-block align-baseline"> Last Date </span> 
                    <p class="text-base text-gray-600 align-baseline"> {{data.lastDate}}</p>
                </div>
               </div> 
            </div>
            <div class="flex justify-center"> 
                <button class="px-2 py-1 border border-red-600 text-red-600 rounded-xl hover:bg-red-500 hover:text-white">
                    Remove
                </button>
            </div>
        </div>
    </div>

</div>

</template>

<script setup >


const sampleData = [
    {
        "city": "Yerba Buena",
        "job": "International Accounts Engineer",
        "experience": 7,
        "education": "irure qui labore nulla ut esse",
        "lastDate": "2022-08-22"
    },
    {
        "city": "Tochio-honchō",
        "job": "Legacy Quality Assistant",
        "experience": 20,
        "education": "consectetur reprehenderit commodo mollit",
        "lastDate": "2022-08-25"
    },
    {
        "city": "Mamer",
        "job": "Lead Marketing Technician",
        "experience": 8,
        "education": "culpa reprehenderit adipisicing officia ut pariatur",
        "lastDate": "2022-11-10"
    },
    {
        "city": "Egilsstaðir",
        "job": "District Tactics Developer",
        "experience": 11,
        "education": "quis eiusmod nisi eu dolor",
        "lastDate": "2022-09-21"
    },
    {
        "city": "Schouweiler",
        "job": "Forward Integration Representative",
        "experience": 13,
        "education": "cupidatat voluptate mollit ut nulla labore",
        "lastDate": "2022-09-25"
    },
    {
        "city": "Oranjestad",
        "job": "Lead Intranet Executive",
        "experience": 18,
        "education": "mollit laboris ipsum",
        "lastDate": "2022-10-10"
    },
    {
        "city": "Muscat",
        "job": "Dynamic Security Manager",
        "experience": 5,
        "education": "ut non ullamco dolor duis officia",
        "lastDate": "2023-03-03"
    },
    {
        "city": "Jabor",
        "job": "Customer Interactions Designer",
        "experience": 19,
        "education": "mollit veniam quis do",
        "lastDate": "2022-07-11"
    },
    {
        "city": "Manama",
        "job": "International Division Technician",
        "experience": 18,
        "education": "cillum nisi nisi",
        "lastDate": "2022-09-21"
    },
    {
        "city": "Sainyabuli",
        "job": "Corporate Program Associate",
        "experience": 18,
        "education": "officia in est dolore",
        "lastDate": "2022-11-05"
    },
    {
        "city": "Vaxholm",
        "job": "Central Web Architect",
        "experience": 12,
        "education": "exercitation ullamco consequat",
        "lastDate": "2023-01-26"
    },
    {
        "city": "Pont Cassé",
        "job": "Principal Research Specialist",
        "experience": 12,
        "education": "velit proident consequat deserunt deserunt adipisicing",
        "lastDate": "2022-09-25"
    },
    {
        "city": "Dhuusamarreeb",
        "job": "Product Implementation Designer",
        "experience": 14,
        "education": "exercitation veniam ut",
        "lastDate": "2023-03-13"
    },
    {
        "city": "Aïn Bessem",
        "job": "National Infrastructure Supervisor",
        "experience": 18,
        "education": "mollit proident cillum",
        "lastDate": "2022-11-09"
    },
    {
        "city": "Shediac",
        "job": "Dynamic Mobility Strategist",
        "experience": 9,
        "education": "sunt elit fugiat enim occaecat do",
        "lastDate": "2022-07-10"
    },
    {
        "city": "San Jose Village",
        "job": "Global Web Developer",
        "experience": 18,
        "education": "qui nostrud esse ut",
        "lastDate": "2022-12-29"
    },
    {
        "city": "Alofi",
        "job": "Legacy Security Executive",
        "experience": 8,
        "education": "tempor quis cupidatat laborum minim",
        "lastDate": "2023-04-20"
    },
    {
        "city": "Tabālah",
        "job": "Forward Operations Consultant",
        "experience": 16,
        "education": "magna laborum duis et proident cupidatat",
        "lastDate": "2023-02-02"
    },
    {
        "city": "Planken",
        "job": "Human Branding Officer",
        "experience": 6,
        "education": "voluptate et tempor",
        "lastDate": "2022-06-06"
    },
    {
        "city": "Podolínec",
        "job": "Direct Web Engineer",
        "experience": 17,
        "education": "exercitation est sit aute proident",
        "lastDate": "2022-09-22"
    },
    {
        "city": "East End",
        "job": "District Response Technician",
        "experience": 5,
        "education": "nulla incididunt nulla",
        "lastDate": "2022-11-22"
    },
    {
        "city": "Aktas",
        "job": "Chief Assurance Architect",
        "experience": 5,
        "education": "et minim duis commodo nostrud",
        "lastDate": "2022-06-03"
    },
    {
        "city": "Al Faḩāḩīl",
        "job": "Dynamic Response Liaison",
        "experience": 9,
        "education": "incididunt ipsum do minim consequat fugiat",
        "lastDate": "2022-05-14"
    },
    {
        "city": "Gouré",
        "job": "Regional Program Liaison",
        "experience": 19,
        "education": "qui laborum Lorem nostrud non",
        "lastDate": "2022-07-03"
    },
    {
        "city": "El Mangó",
        "job": "Forward Paradigm Executive",
        "experience": 12,
        "education": "pariatur mollit sit deserunt",
        "lastDate": "2023-02-19"
    }
]
</script>