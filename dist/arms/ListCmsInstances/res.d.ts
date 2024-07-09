export interface ListCmsInstancesResponse {
    /**
     * 请求ID。
     * @example `E7A04B0D-E2CA-59BB-8A9D-D5D349C22BF1`
     */
    RequestId: string;
    /**
     * 返回结构体。
     */
    Data: {
        /**
         * 是否采集云产品相关aliyun tag标签。
         * @example `true`
         */
        EnableTag: boolean;
        /**
         * 返回结构体。
         */
        Products: {
            /**
             * 产品描述。
             * @example `-
            `
             */
            Descr: string;
            /**
             * 实例名称。
             * @example `cloudserver`
             */
            Instance: string;
            /**
             * 产品的代码。
             * @example `face`
             */
            Prod: string;
            /**
             * 接入的云产品名称。
             * @example `hologres`
             */
            Name: string;
            /**
             * 实例ID。
             * @example `20210`
             */
            Id: string;
            /**
             * Integration的接入状态。
             * - `true`：表示已接入。
             * - `false`：表示未接入。
             * @example `true`
             */
            State: string;
            /**
             * Grafana大盘创建时间的时间戳。
             * @example `1647852021000`
             */
            Time: string;
            /**
             * 产品类型。
             * @example `HOLOGRES`
             */
            Type: string;
            /**
             * Grafana大盘的完整URL。
             * @example `https://g.console.aliyun.com/d/1098370038733503-35894-565/cms-hologres?orgId\u003d9\u0026refresh\u003d60s`
             */
            Url: string;
            /**
             * 事件来源。
             * @example `arms`
             */
            Source: string;
        }[];
    };
}
