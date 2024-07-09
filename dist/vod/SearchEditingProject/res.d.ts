export interface SearchEditingProjectResponse {
    /**
     * 云剪辑工程总数。
     * @example `2`
     */
    Total: number;
    /**
     * 请求ID。
     * @example `9262E3DA-07FA-48*****62-FCBB6BC61D08`
     */
    RequestId: string;
    ProjectList: {
        /**
         * 云剪辑工程列表。
         */
        Project: {
            /**
             * 存储区域。
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
             * @example `2017-01-11T12:00:00Z`
             */
            CreationTime: string;
            /**
             * 云剪辑工程最新修改时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2017-01-11T13:00:00Z`
             */
            ModifiedTime: string;
            /**
             * 云剪辑工程描述。
             * @example `故事板测试工程001`
             */
            Description: string;
            /**
             * 云剪辑工程封面URL。
             * @example `cover_url`
             */
            CoverURL: string;
            /**
             * 云剪辑工程ID。
             * @example `25cfc178d2de4*****e77aebed6afcd`
             */
            ProjectId: string;
            /**
             * 云剪辑工程总时长，与Timeline的总时长一致。
             * > 返回参数中不含Timeline字段。
             * @example `22.65`
             */
            Duration: number;
            /**
             * 云剪辑工程标题。
             * @example `视频_150873681****`
             */
            Title: string;
            /**
             * 地域。
             * @example `cn-shanghai`
             */
            RegionId: string;
        }[];
    };
}
