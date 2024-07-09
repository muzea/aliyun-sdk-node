export interface SearchSimilarImageClustersResponse {
    /**
     * 相似图片聚类列表
     */
    similar_image_clusters: {
        /**
         * 相似图片列表
         */
        files: any[];
    }[];
    /**
     * 用作下次遍历的 marker
     * @example `NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0***`
     */
    next_marker: string;
}
