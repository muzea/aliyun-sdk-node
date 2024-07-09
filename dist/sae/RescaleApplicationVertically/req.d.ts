export interface RescaleApplicationVerticallyRequest {
    /**
     * 目标应用ID。
     * @example `0099b7be-5f5b-4512-a7fc-56049ef1****`
     */
    "AppId": string;
    /**
     * 目标CPU规格，单位为毫核。
     * @example `1000`
     */
    "Cpu": string;
    /**
     * 目标内存规格，单位为MB。
     * @example `2048`
     */
    "Memory": string;
}
