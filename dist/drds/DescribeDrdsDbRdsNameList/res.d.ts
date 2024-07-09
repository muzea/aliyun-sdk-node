export interface DescribeDrdsDbRdsNameListResponse {
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `7E6FA2BF-05F2-44DD-95C0-D1B5B8xxxxxx`
     */
    RequestId: string;
    InstanceNameList: {
        InstanceName: string[];
    };
}
