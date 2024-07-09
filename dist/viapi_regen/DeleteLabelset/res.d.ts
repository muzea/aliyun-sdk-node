export interface DeleteLabelsetResponse {
    /**
     * 每个请求分配唯一的服务器请求ID。
     * @example `438CF366-4E53-029D-A8FB-29EB2AB694A7`
     */
    RequestId: string;
    /**
     * 出参数据实体。
     */
    Data: {
        /**
         * 标注ID。
         * @example `228`
         */
        Id: number;
        /**
         * 创建时间。
         * @example `1633745786000`
         */
        GmtCreate: number;
        /**
         * 标注名称。
         * @example `test3`
         */
        Name: string;
        /**
         * 标注描述。
         * @example `test3`
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
         * @example `FILE_CHECK_SUCCESS`
         */
        Status: string;
    };
}
