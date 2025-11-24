"use client"
import { Checkbox } from "@heroui/checkbox";
import { DateRangePicker } from "@heroui/date-picker";

export default function GalleryOptions() {
    return (
        <div className="border-1 p-5 rounded-sm">
            <div className="mb-[0.8rem]">
                <div className="text-gray-600 text-[0.9rem] mb-[2px]">Keywords</div>
                <ul className="flex gap-2">
                    <li>
                        <span className="bg-gray-300 px-2 py-1 rounded-lg">Foundation</span>
                    </li>   
                    <li>
                        <span className="bg-gray-300 px-2 py-1 rounded-lg">CCS Nights</span>
                    </li>
                </ul>
            </div>
            <div className="mb-[0.8rem]">
                <div className="text-gray-600 text-[0.9rem] mb-[2px]">Department</div>
                <ul className="flex flex-col">
                    <li>
                        <Checkbox size="sm">
                            IT
                        </Checkbox>
                    </li>
                    <li>
                        <Checkbox size="sm">
                            CS
                        </Checkbox>
                    </li>
                </ul>
            </div>
            <div className="mb-[0.8rem]">
                <div className="text-gray-600 text-[0.9rem] mb-[2px]">Date Range</div>
                <DateRangePicker className="max-w-xs" label="Event Range" variant="underlined" />
            </div>
            <div className="mb-[0.8rem]">
                <div className="text-gray-600 text-[0.9rem] mb-[2px]">Audience</div>
                <ul className="flex flex-col">
                    <li>
                        <Checkbox size="sm">
                            Professor
                        </Checkbox>
                    </li>
                    <li>
                        <Checkbox size="sm">
                            Student Leaders
                        </Checkbox>
                    </li>
                    <li>
                        <Checkbox size="sm">
                            All Students
                        </Checkbox>
                    </li>
                </ul>
            </div>

        </div>
    )
}