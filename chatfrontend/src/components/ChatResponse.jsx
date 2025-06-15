const ChatResponse = ({ response }) => {
  if (!response) {
    return null;
  }

  const { candidates, usageMetadata } = response;

  return (
    <div className="container mt-4">
      <h3>Response</h3>
      {candidates.map((candidate, index) => (
        <div key={index} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Candidate {index + 1}</h5>
            <p className="card-text">{candidate.content?.parts?.[0]?.text}</p>

            {candidate.citationMetadata?.citationSources?.length > 0 && (
              <>
                <h6>Citations</h6>
                <ul>
                  {candidate.citationMetadata.citationSources.map((source, idx) => (
                    <li key={idx}>
                      <a href={source.url} target="_blank" rel="noopener noreferrer">
                        {source.url}
                      </a>{" "}
                      {`indexes: ${source.startIndex} - ${source.endIndex}`}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      ))}

      <h4>Usage Metadata</h4>
      <p>Prompt tokens: {usageMetadata.promptTokenCount}</p>
      <p>Response token count: {usageMetadata.candidatesTokenCount}</p>
      <p>Total tokens: {usageMetadata.totalTokenCount}</p>
    </div>
  );
};

export default ChatResponse;
