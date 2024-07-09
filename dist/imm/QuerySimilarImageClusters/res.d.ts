export interface QuerySimilarImageClustersResponse {
    /**
     * 请求ID。
     * @example `CA995EFD-083D-4F40-BE8A-BDF75FFF****
    `
     */
    RequestId: string;
    /**
     * 相似图片分类列表。
     */
    SimilarImageClusters: any[];
    /**
     * 翻页标记。当聚类列表总数大于设置的MaxResults时，用于翻页的Token。符合条件的聚类列表未全部返回时，此参数才有值。
     * 下一次查询聚类时将此值作为NextToken传入，将后续的聚类列表返回。
     * @example `CAESEgoQCg4KClVwZGF0ZVRpbWUQARgBIs8ECgkAAJLUwUCAQ****`
     */
    NextToken: string;
}
