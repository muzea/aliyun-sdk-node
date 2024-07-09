export interface ListBasicAcceleratorsRequest {
    /**
     * 基础型全球加速实例所属的地域ID，仅取值：**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 列表的页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数。最大值：**50**。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 基础型全球加速实例ID。
     * @example `ga-bp17frjjh0udz4qz****`
     */
    "AcceleratorId"?: string;
    /**
     * 基础型全球加速实例的状态。取值：
     * - **init**：初始化。
     * - **active**：可用。
     * - **configuring**：配置中。
     * - **binding**：绑定中。
     * - **unbinding**：解绑中。
     * - **deleting**：删除中。
     * - **finacialLocked**：欠费锁定。
     * @example `active`
     */
    "State"?: string;
    /**
     * 基础型全球加速实例所属资源组ID。
     * @example `rg-aekzrnd67gq****`
     */
    "ResourceGroupId"?: string;
    /**
     * 基础型全球加速实例的标签。
     * 您最多可输入20个标签。
     */
    "Tag"?: {
        /**
         * 基础型全球加速实例的标签键。一旦输入该值，则不允许为空字符串。
         * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * 您最多可输入20个标签键。
         * @example `Keytest`
         */
        Key: string;
        /**
         * 基础型全球加速实例的标签值。一旦输入该值，不可以为空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * 您最多可输入20个标签值。
         * @example `Valuetest`
         */
        Value: string;
    }[];
}
