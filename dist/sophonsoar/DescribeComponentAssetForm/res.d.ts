export interface DescribeComponentAssetFormResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `9D1651AC-31CC-5CC4-A14E-626B3FCC1022`
     */
    RequestId: string;
    /**
     * 组件资产的配置元信息，为JSONArray格式，包含字段：
     * - **name**：参数的名称
     * - **defaultValue**：参数的默认值
     * - **description**：参数描述信息
     * - **required**：参数是否必填，**true**表示必填，**false**表示非必填
     * @example `[
        {
            "defaultValue": "",
            "description": "assetname",
            "name": "assetname",
            "required": true
        }
    ]`
     */
    ComponentAssetForm: string;
}
