export interface AdjustPtsSceneSpeedRequest {
    /**
     * 场景id
     * @example `DYXXX12H`
     */
    "SceneId": string;
    /**
     * 调速配置
     */
    "ApiSpeedList"?: {
        /**
         * API ID。可以根据此ID在Relation中找到对应的API信息。
         * @example `DYXXX12H`
         */
        ApiId: string;
        /**
         * 您需要调整到的压力值。并发模式即并发值，RPS模式即RPS值。
         * @example `30`
         */
        Speed: number;
    }[];
}
