interface UnbindSlbRequest {
    "RegionId"?: string;
    /**
    * 目标应用ID
    * @example `0099b7be-5f5b-4512-a7fc-56049ef1aa6b`
    */ "AppId": string;
    /**
    * 是否解绑公网SLB
    * @example `true`
    */ "Internet"?: boolean;
    /**
    * 是否解绑私网SLB
    * @example `true`
    */ "Intranet"?: boolean;
}
export { UnbindSlbRequest };