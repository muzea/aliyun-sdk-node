export interface CreateSDGRequest {
    /**
     * AIC实例ID。可以通过调用[DescribeARMServerInstances](~~DescribeARMServerInstances~~)获取InstanceId值。
     * @example `aic-xxxx`
     */
    "InstanceId": string;
    /**
     * SDG最大容量，单位GB。
     * >- 为了节约成本，建议按需评估。
     * >- 如果是首次创建SDG，**Size**为必填参数。
     * >- 后续数据量增大时可传递新的**Size**进行扩容。如果**Size**不为空，且大于原有SDG的**Size**值，则表示将该SDG对应的原始云盘扩容到当前**Size**大小。如果**Size**为空，或填入的**Size**小于原有SDG的**Szie**值，系统将不做处理。
     * @example `20`
     */
    "Size"?: string;
    /**
     * SDG的描述信息。
     * > 建议详细填写，以便后续查询。
     * @example `测试SDG`
     */
    "Description"?: string;
    /**
     * 已有SDG的ID。
     * > - 如果为首次创建SDG，**FromSDGId**则为空。
     * >- 如果**FromSDGId**非法或查询不到对应的原始云盘，则报错。
     * >- 如果**FromSDGId**不为空，则表示非首次创建SDG，对已有SDG进行操作。
     * @example `sdg-xxxxx`
     */
    "FromSDGId"?: string;
}
