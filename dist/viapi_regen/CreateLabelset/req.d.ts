export interface CreateLabelsetRequest {
    /**
     * 数据集ID。
     * @example `120`
     */
    "DatasetId": number;
    /**
     * 标注名称。
     * @example `test3`
     */
    "Name": string;
    /**
     * 标注描述。
     * @example `test3`
     */
    "Description"?: string;
    /**
     * 预标注标识。仅在`Type=USE_LABEL_SYSTEM`时生效。
     * @example `123`
     */
    "PreLabelId"?: number;
    /**
     * 标注类型。取值如下：
     * - UPLOAD_FILE：上传标注文件
     * - SELECT_FILE：选择标注文件
     * - USE_LABEL_SYSTEM：选择标注系统
     * @example `UPLOAD_FILE`
     */
    "Type": string;
    /**
     * Object名。使用UTF-8编码；长度在1-1023之间；不能以“/”“\”开头。
     * @example `daily/label/120/1634196189161_1631762324685_1631174016651_small.csv`
     */
    "ObjectKey"?: string;
    /**
     * 用户选择的OSS路径。
     * @example `oss://regen-test-bucket/jhdtest/picture/`
     */
    "UserOssUrl"?: string;
    /**
     * 打标设置。
     * @example `{"tags":["红绿灯","信号灯"]}`
     */
    "TagSettings"?: string;
    /**
     * 打标人列表。
     * @example `["123123434341","3423423424324"]`
     */
    "TagUserList"?: string;
}
