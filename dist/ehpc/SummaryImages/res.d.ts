export interface SummaryImagesResponse {
    /**
     * 请求ID。
     * @example `896D338C-E4F4-41EC-A154-D605E5DE****`
     */
    RequestId: string;
    /**
     * 指定集群上的全部镜像名称。
     * @example `{"summaryImages":["gromacs.sif","linpack.sif","sccIntelMPI1.sif","test.sif","usergromac.sif.user"]}`
     */
    ImagesName: string;
}
