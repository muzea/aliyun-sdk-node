export interface SearchImageFigureClusterResponse {
    /**
     * 请求ID。
     * @example `C2734912-E6D5-052C-AC67-6A9FD02*****`
     */
    RequestId: string;
    /**
     * 搜索出的人脸分组数组。
     */
    Clusters: {
        /**
         * 人脸框信息。
         */
        Boundary: any;
        /**
         * 和该人脸框中的人脸相似的人脸分组ID。
         * @example `Cluster-ca730577-06b1-42c7-a25b-8f2c7******`
         */
        ClusterId: string;
        /**
         * 人脸和挑选出的人脸分组的相似度，该值越大则相似度越高，取值范围为0～1。
         * @example `0.87413794`
         */
        Similarity: number;
    }[];
}
