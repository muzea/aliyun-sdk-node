export interface QueryScriptWaveformsResponse {
    HttpStatusCode: number;
    Code: string;
    Message: string;
    RequestId: string;
    Success: boolean;
    ScriptWaveforms: {
        ScriptContent: string;
        ScriptWaveformId: string;
        FileName: string;
        ScriptId: string;
        FileId: string;
    }[];
}
