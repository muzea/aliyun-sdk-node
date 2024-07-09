export interface GetLabelsetResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `6670C3CC-BD5D-01A5-9371-2D4F82E98FF1`
     */
    RequestId: string;
    /**
     * 出参数据实体。
     */
    Data: {
        /**
         * 标注ID。
         * @example `833`
         */
        Id: number;
        /**
         * 创建时间。
         * @example `1662605747000`
         */
        GmtCreate: number;
        /**
         * 标记名称。
         * @example `回流数据集`
         */
        Name: string;
        /**
         * 标记描述。
         * @example `test2`
         */
        Description: string;
        /**
         * 标注类型。取值如下：
         * - UPLOAD_FILE（上传标注文件）
         * - SELECT_FILE（选择标注文件）
         * - USE_LABEL_SYSTEM（选择标注系统）
         * @example `USE_LABEL_SYSTEM`
         */
        LabelType: string;
        /**
         * 当前标注的打标人。仅在`LabelType=USE_LABEL_SYSTEM`时存在。
         * @example `["278166737224834274"]`
         */
        TagUserList: string;
        /**
         * 当前标注的标签名称。
         * @example `["红绿灯","信号灯"]`
         */
        Tags: string;
        /**
         * 当前标注子任务包大小。仅在`LabelType=USE_LABEL_SYSTEM`时存在。
         * @example `20`
         */
        SubTaskPackageSize: string;
        /**
         * 标注状态。取值如下：
         * - FILE_CHECKING（文件格式校验中）
         * - FILE_CHECK_SUCCESS（文件格式校验成功）
         * - FILE_CHECK_FAIL（文件格式校验失败）
         * @example `TAG_FINISHED`
         */
        Status: string;
        /**
         * 标注数据的数量。
         * @example `30`
         */
        Total: number;
    };
}
