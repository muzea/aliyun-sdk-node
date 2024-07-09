export interface DescribeDrdsInstanceVersionResponse {
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `2F7F8080-9132-4279-85D0-B7E5C4305162`
     */
    RequestId: string;
    /**
     * 实例版本详情。
     */
    Data: {
        /**
         * 最新实例版本。
         * @example `5.4.12-16315258`
         */
        NewestVersion: string;
        /**
         * 当前实例版本。
         * @example `5.3.12-15682777`
         */
        InstanceVersion: string;
    };
}
