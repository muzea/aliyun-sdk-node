import { DescribeFileRequest } from "./DescribeFile/req";
import { DescribeFileResponse } from "./DescribeFile/res";
import { ApplyFileUploadLeaseRequest } from "./ApplyFileUploadLease/req";
import { ApplyFileUploadLeaseResponse } from "./ApplyFileUploadLease/res";
import { AddFileRequest } from "./AddFile/req";
import { AddFileResponse } from "./AddFile/res";
import { GetIndexJobStatusRequest } from "./GetIndexJobStatus/req";
import { GetIndexJobStatusResponse } from "./GetIndexJobStatus/res";
import { CreateIndexRequest } from "./CreateIndex/req";
import { CreateIndexResponse } from "./CreateIndex/res";
import { SubmitIndexJobRequest } from "./SubmitIndexJob/req";
import { SubmitIndexJobResponse } from "./SubmitIndexJob/res";
import { RetrieveRequest } from "./Retrieve/req";
import { RetrieveResponse } from "./Retrieve/res";

interface BAILIAN {
    /**
     * 获取已经添加到百炼中的文件描述信息，包括文件解析状态等。
     */
    DescribeFile(query: DescribeFileRequest): Promise<DescribeFileResponse>;
    /**
     * 该接口用于支持百炼数据中心-数据管理模块文档上传操作，用于申请一个文件上传租约（返回一个http链接），并将文件上传到百炼指定的存储空间内。
     */
    ApplyFileUploadLease(query: ApplyFileUploadLeaseRequest): Promise<ApplyFileUploadLeaseResponse>;
    /**
     * 该接口用于将已经成功上传的文档添加到百炼系统中，添加成功之后，系统会自动启动文件的解析。文件解析有排队机制，如果队列较长，文件可能需要等待一段时间才能解析完成。
     */
    AddFile(query: AddFileRequest): Promise<AddFileResponse>;
    /**
     * 此接口用于查询索引创建作业任务的当前状态。用户可以通过提交的作业任务ID检查索引操作的进度，包括是否完成、执行中、或遇到错误。
     */
    GetIndexJobStatus(query: GetIndexJobStatusRequest): Promise<GetIndexJobStatusResponse>;
    /**
     * 该接口将已经文档解析之后的数据按照设置的索引创建流程添加到百炼系统中，形成索引信息，后续可以提供查询索引的能力。
     */
    CreateIndex(query: CreateIndexRequest): Promise<CreateIndexResponse>;
    /**
     * 此接口用于提交一个索引作业任务，它将创建索引相关的处理作业添加到百炼系统中。执行成功后，数据将被索引，并可用于快速检索。该接口不会立即完成，而是会进入一个作业队列进行排队执行，需要执行查询索引作业状态接口来获取作业执行的状态
     */
    SubmitIndexJob(query: SubmitIndexJobRequest): Promise<SubmitIndexJobResponse>;
    /**
     * 此接口用于通过关键字检索知识库中的索引信息。它允许用户传递搜索配置，并获取匹配的索引数据列表。检索结果可帮助用户评估索引的质量和相关性。
     */
    Retrieve(query: RetrieveRequest): Promise<RetrieveResponse>;
}
export default BAILIAN;
