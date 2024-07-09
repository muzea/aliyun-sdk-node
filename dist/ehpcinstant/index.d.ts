import { DescribeJobMetricDataRequest } from "./DescribeJobMetricData/req";
import { DescribeJobMetricDataResponse } from "./DescribeJobMetricData/res";
import { DescribeJobMetricLastRequest } from "./DescribeJobMetricLast/req";
import { DescribeJobMetricLastResponse } from "./DescribeJobMetricLast/res";
import { GetImageRequest } from "./GetImage/req";
import { GetImageResponse } from "./GetImage/res";
import { DeleteJobsRequest } from "./DeleteJobs/req";
import { DeleteJobsResponse } from "./DeleteJobs/res";
import { ListExecutorsRequest } from "./ListExecutors/req";
import { ListExecutorsResponse } from "./ListExecutors/res";
import { AddImageRequest } from "./AddImage/req";
import { AddImageResponse } from "./AddImage/res";
import { GetJobRequest } from "./GetJob/req";
import { GetJobResponse } from "./GetJob/res";
import { RemoveImageRequest } from "./RemoveImage/req";
import { RemoveImageResponse } from "./RemoveImage/res";
import { CreateJobRequest } from "./CreateJob/req";
import { CreateJobResponse } from "./CreateJob/res";
import { ListJobsRequest } from "./ListJobs/req";
import { ListJobsResponse } from "./ListJobs/res";
import { ListJobExecutorsRequest } from "./ListJobExecutors/req";
import { ListJobExecutorsResponse } from "./ListJobExecutors/res";
import { ListImagesRequest } from "./ListImages/req";
import { ListImagesResponse } from "./ListImages/res";

interface EHPCINSTANT {
    /**
     * 通过指定特定作业数组索引及查询监控项参数，查询作业的监控时序数据集。
     */
    DescribeJobMetricData(query: DescribeJobMetricDataRequest): Promise<DescribeJobMetricDataResponse>;
    /**
     * 通过指定特定的作业数组索引列表，查询作业数组列表下的所有即时监控指标。
     */
    DescribeJobMetricLast(query: DescribeJobMetricLastRequest): Promise<DescribeJobMetricLastResponse>;
    /**
     * 获取镜像详情。
     */
    GetImage(query: GetImageRequest): Promise<GetImageResponse>;
    /**
     * 删除指定集群中一个或多个作业。
     */
    DeleteJobs(query: DeleteJobsRequest): Promise<DeleteJobsResponse>;
    /**
     * 查询全局Executor信息。
     */
    ListExecutors(query: ListExecutorsRequest): Promise<ListExecutorsResponse>;
    /**
     * 添加用户自定义镜像。
     */
    AddImage(query: AddImageRequest): Promise<AddImageResponse>;
    /**
     * 获取执行作业详情。
     */
    GetJob(query: GetJobRequest): Promise<GetJobResponse>;
    /**
     * 移除用户自定义镜像。
     */
    RemoveImage(query: RemoveImageRequest): Promise<RemoveImageResponse>;
    /**
     * 创建一个E-HPC Instant 作业。
     */
    CreateJob(query: CreateJobRequest): Promise<CreateJobResponse>;
    /**
     * 查询指定集群中的作业列表。
     */
    ListJobs(query: ListJobsRequest): Promise<ListJobsResponse>;
    /**
     * 查询作业Executor信息。
     */
    ListJobExecutors(query: ListJobExecutorsRequest): Promise<ListJobExecutorsResponse>;
    /**
     * 查询镜像列表。
     */
    ListImages(query: ListImagesRequest): Promise<ListImagesResponse>;
}
export default EHPCINSTANT;
