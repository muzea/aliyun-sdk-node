export interface ListDataSetResponse {
    Data: {
        /**
         * 数据集列表。
         */
        Data: {
            /**
             * 数据集ID。
             * @example `1`
             */
            SetId: number;
            /**
             * 数据集名称。
             * @example `数据集A`
             */
            SetName: string;
            /**
             * 数据集所在域名。内部用忽略。
             * @example `“”`
             */
            SetDomain: string;
            /**
             * 数据集访问角色。内部用忽略。
             * @example `“”`
             */
            SetRoleArn: string;
            /**
             * 数据集OSSBcket名。内部用忽略。
             * @example `“”`
             */
            SetBucketName: string;
            /**
             * 数据集文件目录名。内部用忽略。
             * @example `“”`
             */
            SetFolderName: string;
            /**
             * 数据集文件总数。
             * @example `1`
             */
            SetNumber: number;
            /**
             * 角色配置状态。
             * @example `1`
             */
            RoleConfigStatus: number;
            /**
             * 双轨需要，客服角色所在的音轨编号，取值0，1；比如客服在第0轨，则此值是0
             * @example `0`
             */
            ChannelId0: number;
            /**
             * 双轨需要，客户角色所在的音轨编号，取值0，1；比如客户在第1轨，则此值是1
             * @example `1`
             */
            ChannelId1: number;
            /**
             * 角色配置任务
             * @example `xx`
             */
            RoleConfigTask: string;
            /**
             * 是否删除：
             * - 0：未删除
             * - 1：已删除
             * @example `0`
             */
            IsDelete: number;
            /**
             * 创建时间。
             * @example `2019-06-20T17:33Z`
             */
            CreateTime: string;
            /**
             * 最后更新时间。
             * @example `2022-05-10T10:34Z`
             */
            UpdateTime: string;
            /**
             * 音轨类型。
             * @example `1`
             */
            ChannelType: number;
            /**
             * 数据集子目录
             * @example `xx`
             */
            SubDir: string;
            /**
             * 创建类型。
             * @example `0`
             */
            CreateType: number;
            /**
             * 用户组ID。
             * @example `1`
             */
            UserGroup: string;
            /**
             * 角色配置文件。
             * @example `filesFromLocal/ef7ff45c147a4a5e882c925f9a75ac43`
             */
            RoleConfigProp: string;
            /**
             * 自动转码
             * @example `1`
             */
            AutoTranscoding: number;
            /**
             * 数据集创建类型
             * - 0：预置
             * - 1：用户创建
             * @example `1`
             */
            SetType: number;
            /**
             * 数据集类型
             * @example `3`
             */
            DataSetType: number;
            /**
             * 质检结果类型
             * - 11：数据集语音
             * - 12：数据集文本
             * @example `11`
             */
            SourceDataType: number;
        }[];
    };
    /**
     * 总条数。
     * @example `23`
     */
    Count: number;
    /**
     * 当前页码。
     * @example `10`
     */
    CurrentPage: number;
    /**
     * 每页显示条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 当前页数。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `96138D8D-8D26-4E41-BFF4-77AED1088BBD`
     */
    RequestId: string;
    /**
     * 请求是否成功，调用方可根据此字段来判断请求是否成功：true表示成功；false/null表示失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 出错时表示出错详情，成功时为successful。
     * @example `successful`
     */
    Message: string;
    Messages: {
        /**
         * 出错时表示出错详情，当输出多条信息时使用。
         */
        Message: string[];
    };
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpStatusCode: number;
}
