export interface DescirbeWorkflowResponse {
    /**
     * 工作流创建时间。
     * @example `2020-01-15 16:30:25 +0800 CST`
     */
    create_time: string;
    /**
     * 工作流经过时长。
     * @example `1h15m33.529968361s`
     */
    duration: string;
    /**
     * 任务结束时间。
     * @example `0001-01-01 00:00:00 +0000 UTC`
     */
    finish_time: string;
    /**
     * 输入数据大小。
     * @example `0`
     */
    input_data_size: string;
    /**
     * 工作流名称。
     * @example `wgs-gpu-97xfn`
     */
    job_name: string;
    /**
     * 工作流所在命名空间。
     * @example `1171330362041663`
     */
    job_namespace: string;
    /**
     * 输出数据大小。
     * @example `0`
     */
    output_data_size: string;
    /**
     * 工作流当前状态。
     * @example `Running`
     */
    status: string;
    /**
     * 碱基对个数。
     * @example `0`
     */
    total_bases: string;
    /**
     * Reads个数。
     * @example `0`
     */
    total_reads: string;
    /**
     * 用户输入参数。
     * @example `{\"wgs_oss_region\":\"cn-shenzhen\",\"wgs_fastq_first_name\":\"fastq/huada/MGISEQ-200019SZ0002402\",\"wgs_fastq_second_name\":\"fastq/huada/MGISEQ-200019SZ0002402\",\"wgs_bucket_name\":\"gene-shenzhen\",\"wgs_vcf_file_name\":\"output/vcf/huada.vcf\",\"wgs_bam_file_name\":\"output/bam/huada.bam\",\"wgs_reference_file\":\"hg19\",\"wgs_service\":\"g\"}`
     */
    user_input_data: string;
}
