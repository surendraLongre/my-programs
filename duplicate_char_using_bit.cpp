#include<bits/stdc++.h>
using namespace std;

void duplicates(string str) {
	int hash{}, check{};
	for(auto c:str){
		check=1;
		check=check<<(c-97);
		if((hash&check)>0) cout<<c<<" is duplicate"<<endl;
		else hash=(hash|check);
	}
}

int main() {
	string str="azzas";
	duplicates(str);
}
