import React from 'react'

interface RolesListData {
    name: string
    image: string
    placeCount: string
    link: string
}

const rolesListData: RolesListData[]  = [
    { name: 'Product-менеджер', image: 'https://api.cloveri.com/media/profession/logo/Product_manager.jpg', placeCount: '1 место', link: '#'},
    { name: 'Product-менеджер', image: 'https://api.cloveri.com/media/profession/logo/UXUI.jpg', placeCount: '1 место', link: '#'},
    { name: 'Product-менеджер', image: 'https://api.cloveri.com/media/profession/logo/frontend.jpg', placeCount: '2 места', link: '#'},
    { name: 'Product-менеджер', image: 'https://api.cloveri.com/media/profession/logo/PRO010.jpg', placeCount: '2 места', link: '#'},
    { name: 'Product-менеджер', image: 'https://api.cloveri.com/media/profession/logo/qa-engineer.jpg', placeCount: '1 место', link: '#'},
    { name: 'Product-менеджер', image: 'https://api.cloveri.com/media/profession/logo/DevOps.png', placeCount: '1 место', link: '#'},
]

const RolesList: React.FC = () => {
    return (
        <div className='mt-10'>
            <div className='text-[52px] pb-[60px]'>Какая роль в проекте вас интересует?</div>
            <div className='pt-[30px] grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-10 justify-items-center'>
                {rolesListData.map( item => {
                    return (
                        <a href={item.link} className='border-solid border border-gray-200 w-full relative hover:shadow-md hover:transition' key={item.name}>
                            <img 
                                className='w-full' 
                                src={item.image} 
                                alt={item.name}
                            />
                            <div className='p-4 h-[100px] flex flex-col justify-between text-gray-700 font-light'>
                                <div className='text-2xl'>{item.name}</div>
                                <div>{item.placeCount}</div>
                            </div>
                        </a>
                    )
                })}
            </div>
        </div>
    );
};

export default RolesList;