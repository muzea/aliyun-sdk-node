export interface UpdateConfigItemsRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 配置信息所属的对象的ID。
     * @example `ccc-test`
     */
    "ObjectId": string;
    /**
     * 配置信息所属对象的类型。
     * @example `INSTANCE`
     */
    "ObjectType": string;
    /**
     * 配置项列表，格式为JSON数组的字符串，数组元素是一个对象，该对象包含两个字段，name，value，name是配置项的名称，value是配置项的值。配置项名称包含系统定义和客户自定义两种，系统定义包括是否允许坐席挂机、是否自动接听、久振未接时长等，这部分配置项名称是固定的，值可以由客户自定义，除此之外，配置项名称也支持客户自定义，客户可以根据需要添加配置项。
     * @example `[{"name":"ShowCalledID","value":"-1"},{"name":"ShowCalleeID","value":"1"},{"name":"AllowHangup","value":"0"},{"name":"AutoAnswerCall","value":"-1"},{"name":"AllowAudioDownload","value":"1"},{"name":"AllowChooseSignedSkillGroup","value":"1"}]`
     */
    "ConfigItems": string;
}
