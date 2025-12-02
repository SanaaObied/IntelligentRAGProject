import pandas as pd

df = pd.read_csv('data/dataset.csv')

def query_rag(question):
    matches = df[df['context'].str.contains(question, case=False)]
    if not matches.empty:
        return matches.iloc[0]['answer']
    return "لا يوجد جواب متوفر للسؤال"
