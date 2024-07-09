export interface DeleteMonitorGroupInstancesRequest {
    /**
     * 应用分组ID。
     * @example `123456`
     */
    "GroupId": number;
    /**
     * 需要删除的实例，多个实例之间用英文逗号分隔开。一次最多能够删除20个。
     * @example `i-a2d5q7pm3f912****,i-a2d5q7pm3f222****`
     */
    "InstanceIdList": string;
    /**
     * 云产品名称缩写。
     * > 关于如何获取云产品名称缩写，请参见[DescribeProjectMeta](~~114916~~)接口的返回参数`Labels`中的`metricCategory`。
     * @example `ecs`
     */
    "Category": string;
}
