import React from 'react'

export default function Billsection() {
  return (
    <div>
      <label className="inline-flex items-center cursor-pointer pt-6 pl-2">
  <input type="checkbox" value="" className="sr-only peer"/>
  <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Table view</span>
</label>

      <div className="flex flex-row">
  <div className="basis-2/3">
  <div className="flex flex-row">
  <div className="basis-1/3">
  </div>
  <div className="basis-1/3"></div>
  <div className="basis-1/3"></div>
</div>
  </div>
  <div className="basis-1/3"> 
  <div className="justify-self-end ..."><button type="button" className=" py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none">
  Book
</button></div>
<form>
    <div className="grid gap-6 mb-6 pt-4 ">
        <div>
           
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="cash" required />
        </div>
        </div>
        </form>
        <div className="">
        <p className="text-2xl ..."> Food Cart</p>

        </div >
        <hr >
        </hr>
        

<div class="relative overflow-x-auto pt-3">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
            <tr>
            <th scope="col" class="px-6 py-3">
                    Qty
                </th>
                <th scope="col" class="px-6 py-3">
                    Qty
                </th>
                <th scope="col" class="px-6 py-3 rounded-s-lg">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Qty
                </th>
                
                <th scope="col" class="px-6 py-3 rounded-e-lg">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Pizza"
                </th>
                <td class="px-6 py-4">
                    1
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
            </tr>
            
           
        </tbody>
        <tfoot>
            <tr class="font-semibold text-gray-900 dark:text-white">
                <th scope="row" class="px-6 py-3 text-base">Total</th>
                <td class="px-6 py-3">3</td>
                <td class="px-6 py-3">21,000</td>
            </tr>
        </tfoot>
    </table>
</div>
<div className="justify-self-end ... pt-5"><button type="button" className=" py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none">
  Final Print
</button>
<button type="button" className=" ml-4 py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-500 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none">
  KOT
</button>
<button type="button" className=" ml-4 py-2 px-3 inline-flex items-end gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-500 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none">
  Order Clear
</button>

</div>

</div>

</div>

    </div>
  )
}
