#include <iostream>
#include<string>
using namespace std;

int main() {
    int t;
    cin>>t;
    
    while(t--){
        int n;
        cin>>n;
        
        int digit;
        cin>>digit;
        
        string num;
        cin>>num;
        
        
        
        while(n--){
            int lastDig = atoi(num[n-1]);
            
            if(lastDig > digit){
                // insert here
                num.insert(n,to_string(digit));
                break;
            }
            else {
                
            }
        }
        cout<<num<<endl;
    }
}