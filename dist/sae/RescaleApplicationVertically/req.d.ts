interface RescaleApplicationVerticallyRequest {
    "RegionId"?: string;
    /**
    * 目标应用ID
    * @example `0099b7be-5f5b-4512-a7fc-56049ef1aa6b`
    */ "AppId": string;
    /**
    * 目标CPU规格，单位毫核。目前只支持有限几种规格。
    * @example `1000`
    */ "Cpu": string;
    /**
    * 目标memory规格，单位MB。目前只支持有限几种规格。
    * @example `2048`
    */ "Memory": string;
}
export { RescaleApplicationVerticallyRequest };