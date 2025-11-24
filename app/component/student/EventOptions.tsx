"use client"
import { Checkbox } from "@heroui/checkbox";
import { DateRangePicker } from "@heroui/date-picker";

export default function EventOptions() {
    return (
        <div className="border-1 p-5 rounded-sm">
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
                <div className="text-gray-600 text-[0.9rem] mb-[2px]">Price</div>
                <ul className="flex flex-col">
                    <li>
                        <Checkbox size="sm">
                            Paid
                        </Checkbox>
                    </li>
                    <li>
                        <Checkbox size="sm">
                            Free
                        </Checkbox>
                    </li>
                </ul>
            </div>
            <div className="mb-[0.8rem]">
                <div className="text-gray-600 text-[0.9rem] mb-[2px]">Status</div>
                <ul className="flex flex-col">
                    <li>
                        <Checkbox size="sm">
                            Upcoming
                        </Checkbox>
                    </li>
                    <li>
                        <Checkbox size="sm">
                            OnGoing
                        </Checkbox>
                    </li>
                    <li>
                        <Checkbox size="sm">
                            Ended
                        </Checkbox>
                    </li>
                    <li>
                        <Checkbox size="sm">
                            Cancelled
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