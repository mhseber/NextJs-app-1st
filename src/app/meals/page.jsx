import MealSearchInput from "./components/MealSearchinput";



export default async function MealsPage({ searchParams }) {
    const query = await searchParams
    const fetchMeals = async () => {
        try {
            const res = await fetch(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
            );
            const data = await res.json();
            // setMeals(data?.meals || []);
            return data.meals;
        } catch (error) {
            console.log(error);
            return [];
        }
    };

    const meals = await fetchMeals();


    return (
        <div>
            <div className='flex justify-center'>
                <MealSearchInput />
            </div>
            <div className='grid grid-cols-4 gap-3'>
                {meals?.map((singleMeal) => {
                    return (
                        <div>
                            <p className='text-3xl text-sky-500 font-bold'>{singleMeal.strMeal}</p>
                            <p>{singleMeal.strInstructions}</p>
                        </div>
                    )
                })}
            </div>
        </div>

    );
}