export interface DeleteLabelsetDataResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `2a78486316511165094166037e1a6e`
     */
    RequestId: string;
    /**
     * 接口返回实体。
     */
    Data: {
        /**
         * 标注集ID。
         * @example `294`
         */
        Id: number;
        /**
         * 创建时间。
         * @example `1651197861000`
         */
        GmtCreate: number;
        /**
         * 标注集名称。
         * @example `fenlei`
         */
        Name: string;
        /**
         * 标注描述。
         * @example `描述`
         */
        Description: string;
        /**
         * 标注类型。取值如下：
         * - UPLOAD_FILE：上传标注文件
         * - SELECT_FILE：选择标注文件
         * - USE_LABEL_SYSTEM：选择标注系统
         * @example `UPLOAD_FILE`
         */
        LabelType: string;
        /**
         * 标注状态。取值如下：
         * - FILE_CHECKING：文件格式校验中
         * - FILE_CHECK_SUCCESS：文件格式校验成功
         * - FILE_CHECK_FAIL：文件格式校验失败
         * - TAG_SYSTEM_INIT：标注系统初始化中
         * - TAGGING：标注中
         * - TAG_FINISHED：标注完成
         * - TAG_FAILED：标注失败
         * @example `FILE_CHECK_SUCCESS`
         */
        Status: string;
        /**
         * 标注数量。
         * @example `180`
         */
        Total: number;
    };
}
