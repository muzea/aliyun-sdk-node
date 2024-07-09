export interface SummaryImagesInfoResponse {
    /**
     * 请求ID。
     * @example `896D338C-E4F4-41EC-A154-D605E5DE****`
     */
    RequestId: string;
    /**
     * 镜像详细信息。
     * @example `{"summaryImagesInfo":[{"ImageName":"gromacs.sif","ImageSize":"4","CreateTime":"16:18","CreateDate":"Apr.1"},{"ImageName":"linpack.sif","ImageSize":"665847525","CreateTime":"14:45","CreateDate":"Apr.1"},{"ImageName":"sccIntelMPI1.sif","ImageSize":"665847525","CreateTime":"14:41","CreateDate":"Apr.1"},{"ImageName":"test.sif","ImageSize":"24","CreateTime":"12:25","CreateDate":"Apr.20"},{"ImageName":"usergromac.sif.user","ImageSize":"4","CreateTime":"15:16","CreateDate":"Apr.19"}]}`
     */
    ImagesInfo: string;
}
