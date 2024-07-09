export interface QueryFigureClustersResponse {
    /**
     * 当次请求的Request ID。
     * @example `CA995EFD-083D-4F40-BE8A-BDF75FFF****`
     */
    RequestId: string;
    /**
     * 翻页标记。
     * @example `10`
     */
    NextToken: string;
    /**
     * 该聚类分组列表。
     */
    FigureClusters: any[];
    /**
     * 当前查询条件下的所有人脸分组数量。
     * @example `100`
     */
    TotalCount: number;
}
