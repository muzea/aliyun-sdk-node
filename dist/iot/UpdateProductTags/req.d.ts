export interface UpdateProductTagsRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无<props="intl"><ph>**实例概览**页面或</ph></props>ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 产品的ProductKey。ProductKey是物联网平台为新建产品颁发的产品Key，作为其全局唯一标识符。您可以在物联网平台控制台查看或调用[QueryProductList](~~69271~~)查看当前账号下所有产品的信息。
     * @example `a1BwAGV****`
     */
    "ProductKey": string;
    /**
     * 产品标签列表。
     */
    "ProductTag": {
        /**
         * 更新后的标签值（value）。长度不可超过128字符，可包含中文、英文字母、数字、下划线（_）和短划线（-）。一个中文汉字算2个字符。
         * @example `202`
         */
        TagValue: string;
        /**
         * 产品标签键（key）。长度不可超过30个字符，可包含英文大小写字母，数字和英文句号（.）。
         * > 传入标签的TagKey必须是已存在的标签key。传入标签的TagKey不能重复。
         * @example `room`
         */
        TagKey: string;
    }[];
}
