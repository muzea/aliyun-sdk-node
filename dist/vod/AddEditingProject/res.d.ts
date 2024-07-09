export interface AddEditingProjectResponse {
    /**
     * 请求ID。
     * @example `E4EBD2BF-5EB0-4476-8829-9D94E1B1****`
     */
    RequestId: string;
    /**
     * 云剪辑工程。具体结构定义，请参见[EditingProject](~~52839~~)。
     */
    Project: {
        /**
         * 云剪辑工程创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2017-01-11T12:00:00Z`
         */
        CreationTime: string;
        /**
         * 云剪辑工程状态。取值：
         * - **Normal**：草稿。
         * - **Producing**：合成中。
         * - **Produced**：合成成功。
         * - **ProduceFailed**：合成失败。
         * @example `Normal`
         */
        Status: string;
        /**
         * 云剪辑工程最新修改时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
         * @example `2017-01-11T13:00:00Z`
         */
        ModifiedTime: string;
        /**
         * 云剪辑工程描述。
         * @example `testtimeline001desciption`
         */
        Description: string;
        /**
         * 云剪辑工程ID。
         * @example `fb2101bf24bf4df34c4cb3187****`
         */
        ProjectId: string;
        /**
         * 云剪辑工程标题。
         * @example `testtimeline`
         */
        Title: string;
    };
}
