export interface DescribeDataSourceParametersResponse {
    /**
     * 请求返回值。
     */
    Data: {
        /**
         * 数据源类型。取值：
         *  - **obs**：华为云obs。
         *  - **wafApi**：腾讯云waf下载api。
         *  - **ckafka**： 腾讯云ckafka。
         * @example `obs`
         */
        DataSourceType: string;
        /**
         * 参数级别。取值：
         *  - **1**：数据源参数。
         * - **2**：日志参数。
         * @example `1`
         */
        ParaLevel: number;
        /**
         * 参数code。
         * @example `region_code`
         */
        ParaCode: string;
        /**
         * 参数名字。
         * @example `region local`
         */
        ParaName: string;
        /**
         * 参数类型。
         * @example `string`
         */
        ParaType: string;
        /**
         * 是否必选参数。取值：
         *  - **1**：必选。
         *  - **0**：非必选。
         * @example `string`
         */
        Required: number;
        /**
         * 格式校验方式。
         * @example `email`
         */
        FormatCheck: string;
        /**
         * 参数值提示。
         * @example `obs bucket name`
         */
        Title: string;
        /**
         * 更多说明。
         * @example `obs docment`
         */
        Hit: string;
        /**
         * 默认参数值。
         * @example `wafApi`
         */
        DefaultValue: string;
        /**
         * 是否禁止修改。取值：
         *  - **true**：禁止修改。
         *  - **false**：可以修改。
         * @example `wafApi`
         */
        Disabled: boolean;
        /**
         * 是否可编辑。取值：
         *  - **0**：禁止修改。
         *  - **1**：可以修改。
         * @example `wafApi`
         */
        CanEditted: number;
        /**
         * 具体的参数列表。
         */
        ParamValue: {
            /**
             * 展示内容。
             * @example `guangzhou`
             */
            Label: string;
            /**
             * 实际的参数内容。
             * @example `ap-guangzhou`
             */
            Value: string;
        }[];
        /**
         * 多云的code。取值：
         * - **qcloud**：腾讯云。
         * - **aliyun**：阿里云。
         * - **hcloud**：华为云。
         * @example `hcloud`
         */
        CloudCode: string;
    }[];
    /**
     * 请求消息ID。
     * @example `6276D891-*****-55B2-87B9-74D413F7****`
     */
    RequestId: string;
}
