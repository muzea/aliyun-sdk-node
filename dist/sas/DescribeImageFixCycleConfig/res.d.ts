export interface DescribeImageFixCycleConfigResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 镜像定时修复开关。
         * - **on**：打开。
         * - **off**：关闭。
         * @example `on`
         */
        ImageFixSwitch: string;
        /**
         * 定时修复周期。单位，天。
         * @example `7`
         */
        ImageFixCycle: number;
        /**
         * 镜像定时修复的范围。该参数为JSON格式，包含以下字段：
         * - **type**：目标类型，固定为repo。
         * - **target**：目标内容，格式：命名空间/镜像仓。
         * @example `{\"type\":\"repo\",\"target\":[\"qa-dac/yyuan9\",\"cdp-uat/zentao\",\"cafdms-qa/xxl-job-admin\",\"cafdms-qa/utils/jdk\",\"cafmfbi/ui\",\"cdp-uat/tradingdesk-webapp\"]}`
         */
        ImageFixTarget: string;
        /**
         * 镜像有过修改的时间范围。单位，天。
         * @example `30`
         */
        ImageTimeRange: number;
    };
    /**
     * 唯一请求ID。
     * @example `D65AADFC-1D20-5A6A-8F6A-9FA53C0D****`
     */
    RequestId: string;
}
