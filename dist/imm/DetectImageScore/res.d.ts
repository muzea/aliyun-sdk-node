export interface DetectImageScoreResponse {
    /**
     * 当次请求的Request ID。
     * @example `6E93D6C9-5AC0-49F9-914D-E02678D3****`
     */
    RequestId: string;
    /**
     * 图片的分数。
     */
    ImageScore: {
        /**
         * 图片视觉质量的综合得分。
         * @example `0.6`
         */
        OverallQualityScore: number;
    };
}
