export interface GetEditingProjectResponse {
    /**
     * 请求ID。
     * @example `63E8B7C7-4812-46*****AD-0FA56029AC86`
     */
    RequestId: string;
    /**
     * 云剪辑工程。
     */
    Project: {
        /**
         * 存储地址。
         * > 您可以登录[点播控制台](https://vod.console.aliyun.com/?spm=a2c4g.11186623.2.15.6948257eaZ4m54#/vod/settings/censored)，选择**配置管理** > **媒资管理配置** > **存储管理**查看存储地址。
         * @example `location_s`
         */
        StorageLocation: string;
        /**
         * 云剪辑工程状态。多个状态使用英文逗号（,）分隔。默认获取所有云剪辑工程。取值：
         * - **Normal**：草稿。
         * - **Producing**：合成中。
         * - **Produced**：合成成功。
         * - **ProduceFailed**：合成失败。
         * @example `Normal`
         */
        Status: string;
        /**
         * 云剪辑工程创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2017-10-23T13:33:40Z`
         */
        CreationTime: string;
        /**
         * 云剪辑工程最新修改时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2017-10-23T14:27:26Z`
         */
        ModifiedTime: string;
        /**
         * 云剪辑工程描述。
         * @example `testdescription`
         */
        Description: string;
        /**
         * 云剪辑工程封面URL。
         * @example `https://****.com/6AB4D0E1E1C74468883516C2349****.png`
         */
        CoverURL: string;
        /**
         * 云剪辑工程ID。
         * @example `fb2101bf24b27*****54cb318787dc`
         */
        ProjectId: string;
        /**
         * 云剪辑工程时间线。
         * @example `{\"TimelineIn\":0,\"TimelineOut\":9.42}`
         */
        Timeline: string;
        /**
         * 云剪辑工程标题。
         * @example `视频_1508736815000`
         */
        Title: string;
        /**
         * 地域。
         * @example `cn-shanghai`
         */
        RegionId: string;
    };
}
