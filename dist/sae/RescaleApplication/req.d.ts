interface RescaleApplicationRequest {
    "RegionId"?: string;
    /**
    * 目标应用ID
    * @example `0099b7be-5f5b-4512-a7fc-56049ef1aa6b`
    */ "AppId": string;
    /**
    * 目标实例数
    * @example `2`
    */ "Replicas": number;
}
export { RescaleApplicationRequest };