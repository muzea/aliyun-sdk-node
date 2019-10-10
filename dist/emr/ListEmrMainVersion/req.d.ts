interface ListEmrMainVersionRequest {
    /**
    * 地域ID。
    * @example `cn-hangzhou`
    */ "RegionId": string;
    /**
    * EMR版本。
    * @example `EMR-3.15.0`
    */ "EmrVersion"?: string;
    /**
    * 软件栈名字：EMR。
    * @example `EMR`
    */ "StackName"?: string;
    /**
    * 软件栈版本。
    * @example `3.15.1.1.0`
    */ "StackVersion"?: string;
    /**
    * 分页页数，从1开始。
    * @example `1`
    */ "PageNumber"?: number;
    /**
    * 分页大小。
    * @example `10`
    */ "PageSize"?: number;
}
export { ListEmrMainVersionRequest };