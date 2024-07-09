export interface GetABMetricGroupResponse {
    /**
     * 请求ID。
     * @example `01D22D08-BA20-5F35-8302-99115F288220`
     */
    RequestId: string;
    /**
     * 指标组名称。
     * @example `visits`
     */
    Name: string;
    /**
     * 场景ID，来源于[ListScenes](https://icms.alibaba-inc.com/content/learn/pai?l=1&m=16768&n=4298955)接口。
     * @example `1`
     */
    SceneId: string;
    /**
     * 指标组描述。
     * @example `访问量相关指标`
     */
    Description: string;
    /**
     * 负责人。
     * @example `2799614***
    `
     */
    Owner: string;
    /**
     * AB实验指标ID列表，逗号分隔。
     * @example `1,2`
     */
    ABMetricIds: string;
    /**
     * AB实验指标名称列表，逗号分隔。
     * @example `pv,uv`
     */
    ABMetricNames: string;
    /**
     * 是否为实时指标组。
     * @example `false`
     */
    Realtime: boolean;
}
