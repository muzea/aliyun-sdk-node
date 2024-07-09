export interface CreatePipelineRequest {
    /**
     * 管道名称。
     * @example `test-pipeline`
     */
    "Name": string;
    /**
     * 管道类型。取值：
     * 1. Standard：标准管道
     * 2. Boost：倍速转码管道
     * 3. NarrowBandHDV2：窄带高清2.0管道
     * @example `Standard`
     */
    "Speed": string;
    /**
     * 优先级，1-10，默认6。数值越大，优先级越高。
     * @example `6`
     */
    "Priority"?: number;
}
