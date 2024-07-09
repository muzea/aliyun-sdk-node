export interface AddDirectionalCardRequest {
    /**
     * 定向分组ID。
     * 您可调用接口[GetCardDetail](~~374328~~)在返回参数中查看定向分组ID（DirectionalGroupId）。
     * @example `5`
     */
    "GroupId": string;
    /**
     * 导入类型。
     * - **NO_GROUP**：仅导入还未分组的定向卡。
     * - **ALL**：全量导入。
     * @example `ALL`
     */
    "UploadType": string;
    /**
     * 导入方式。
     * - **TAG**：标签，导入指定标签的定向卡。
     * - **ORDER**：订单，导入指定订单的定向卡。
     * - **FILE**：批量文件，导入批量文件中的定向卡。
     * @example `TAG`
     */
    "UploadMethod": string;
    /**
     * 标签ID列表。导入方式选择为标签时，需填入该参数。
     */
    "TagList": string[];
    /**
     * 订单编号列表。导入方式选择为订单时，需填入该参数。
     */
    "OrderList"?: string[];
    /**
     * 批量文件的OSS路径。导入方式选择为批量文件时，需填入该参数。
     * @example `https://linkcard-user-online.oss-cn-zhangjiakou.aliyuncs.com/DIRECTIONAL_GROUP/20220811/xxxx.csv`
     */
    "FileUri"?: string;
    /**
     * 定向分组名称。
     * @example `测试分组`
     */
    "GroupName"?: string;
}
