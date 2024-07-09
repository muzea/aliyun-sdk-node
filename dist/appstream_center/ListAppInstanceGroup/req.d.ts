export interface ListAppInstanceGroupRequest {
    /**
     * 每页的查询结果数量，不可超过`100`。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 需展示的查询结果页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 交付组状态列表。
     */
    "Status"?: string[];
    /**
     * 交付组ID。
     * @example `aig-9ciijz60n4xsv****`
     */
    "AppInstanceGroupId"?: string;
    /**
     * 产品类型。
     * @example `CloudApp`
     */
    "ProductType": string;
    /**
     * 交付组名称，查询时采用模糊匹配规则。例如，假设填写的交付组名称为`办公应用`，则名称中包含`办公应用`的交付组都会被查询到，例如名为`我的办公应用`、`办公应用A`的交付组。
     * @example `办公应用`
     */
    "AppInstanceGroupName"?: string;
    /**
     * 应用镜像ID，可从无影云应用控制台的镜像管理页面获取。
     * @example `img-8z4nztpaqvay4****`
     */
    "AppCenterImageId"?: string;
    /**
     * 交付组所属的地域ID。关于支持的地域详情，请参见[使用限制](https://help.aliyun.com/document_detail/426036.html)。
     * @example `cn-hangzhou`
     */
    "BizRegionId"?: string;
    /**
     * 购买资源的规格类型ID。可通过[ListNodeInstanceType](~~428502~~)接口获取。
     * @example `appstreaming.vgpu.4c8g.2g`
     */
    "NodeInstanceType"?: string;
}
