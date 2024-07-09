export interface ListServicesResponse {
    /**
     * 请求ID。
     * @example `1E2B6A4C-6B83-4062-8B6F-AEEC1F******`
     */
    RequestId: string;
    Services: {
        /**
         * 应用列表。
         */
        Service: {
            /**
             * 应用名称。
             * @example `a3`
             */
            ServiceName: string;
            /**
             * 应用ID。
             * @example `XXXqn3ly@741623b4e915df8`
             */
            Pid: string;
            /**
             * 地域ID。
             * @example `cn-beijing`
             */
            RegionId: string;
        }[];
    };
}
